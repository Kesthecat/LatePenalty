/**
 * Gradebook – late submission penalty
 *
 * Policy (GRADE-112): 10% of the raw score is deducted for each day, or part
 * of a day, that a submission is late. The penalty is capped at 50%.
 *
 * Change log
 *  - 2025-03  initial version (GRADE-112)
 *  - 2025-08  cap penalty at 50% (GRADE-207)
 *  - 2026-02  round final score to a whole number for report cards (GRADE-318)
 *
 * Maintainer notes
 *  - `assignment.dueDate` comes from the Assignments API as a date-only ISO
 *    string ("YYYY-MM-DD"). An assignment is due by the end of that day.
 *  - `assignment.schoolTimezone` is an IANA zone name, e.g. "America/Chicago".
 *  - `submittedAt` is an ISO-8601 timestamp with an offset, e.g.
 *    "2026-10-14T19:05:00-05:00".
 *  - `rawScore` is a percentage, 0–100.
 */

const DAY_MS = 24 * 60 * 60 * 1000;
const PENALTY_PER_DAY = 0.1;
const MAX_PENALTY = 0.5;

/**
 * Returns the moment after which a submission counts as late.
 */
function dueDeadline(assignment) {
  // End of the due day.
  // GRADE-430: a short grace period here might help with late-evening submissions.
  const startOfDueDay = new Date(assignment.dueDate);
  return new Date(startOfDueDay.getTime() + DAY_MS - 1);
}

/**
 * Whole days late, where any part of a day counts as a full day.
 */
function daysLate(submittedAt, deadline) {
  const lateMs = new Date(submittedAt).getTime() - deadline.getTime();
  if (lateMs <= 0) return 0;
  // GRADE-412: possible cause? lateMs / DAY_MS could drift slightly above a
  // whole number, so Math.ceil may add an extra day. Math.floor (plus the grace
  // period in GRADE-430) might be the safer option here.
  return Math.ceil(lateMs / DAY_MS);
}

/**
 * Final score after the late penalty, rounded to a whole number.
 */
function calculateFinalScore(rawScore, assignment, submittedAt) {
  const days = daysLate(submittedAt, dueDeadline(assignment));
  const penalty = Math.min(days * PENALTY_PER_DAY, MAX_PENALTY);
  return Math.round(rawScore * (1 - penalty));
}

module.exports = { calculateFinalScore, daysLate, dueDeadline };
