# GRADE-412 · Students penalised as late for on-time submissions

| Field | Value |
|---|---|
| **Type** | Bug |
| **Priority** | High |
| **Status** | To Do |
| **Component** | Gradebook / late-penalty |
| **Reporter** | Customer Support (Tier 2) |
| **Assignee** | *Unassigned* |
| **Affects version** | gradebook-late-penalty 1.4.2 |
| **Labels** | `customer-reported`, `grading` |
| **Attachments** | `grade-412-sample.json` |

---

## Description

A teacher at Lone Star Middle School (Texas) reports that several students
were given a late penalty on their **Unit 4 Persuasive Essay** even though they
submitted it on the due date (14 Oct). The teacher says it looks like students
who submitted "in the evening, after about 7pm" got 10% taken off, while
students who submitted earlier that day were fine.

The teacher has had to override the grades manually for 3 students and is
worried it is happening in other classes too.

**Steps to reproduce**

1. Create an assignment due 14 Oct.
2. Submit as a student on 14 Oct in the evening.
3. Check the final score in the gradebook.

**Expected:** no penalty
**Actual:** 10% penalty applied

Exported gradebook data attached (`grade-412-sample.json`).

---

## Comments

**Priya (Customer Support)** · 2 days ago
> Spoke to the teacher again. She also mentioned that on a *different*
> assignment a student scored 85 and was 3 days late, and the gradebook gave
> 59. She worked it out by hand as 60. Could this all be a rounding issue? Is
> the rounding change from GRADE-318 related?

**Marcus (Product Owner)** · 1 day ago
> Thanks Priya. Pulling this into the current sprint. Whoever picks this up,
> please confirm root cause before fixing and let me know if the policy needs
> clarifying — I'm around if you have questions.

**Customer Success** · 1 day ago
> District admin is asking for an ETA. This school is part of a 40-school
> rollout so we'd like to get this sorted quickly 🙏
