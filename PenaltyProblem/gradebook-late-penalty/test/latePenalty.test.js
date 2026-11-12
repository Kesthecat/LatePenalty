const test = require('node:test');
const assert = require('node:assert/strict');
const { calculateFinalScore } = require('../src/latePenalty');

const assignment = {
  id: 'ASN-1001',
  title: 'Fractions worksheet',
  dueDate: '2026-11-20',
  schoolTimezone: 'Europe/London',
};

test('on-time submission gets no penalty', () => {
  assert.equal(calculateFinalScore(100, assignment, '2026-11-20T15:00:00Z'), 100);
});

test('submission one minute before the deadline is on time', () => {
  assert.equal(calculateFinalScore(80, assignment, '2026-11-20T23:59:00Z'), 80);
});

test('one day late loses 10%', () => {
  assert.equal(calculateFinalScore(100, assignment, '2026-11-21T09:00:00Z'), 90);
});

test('part of a day late counts as a full day', () => {
  assert.equal(calculateFinalScore(100, assignment, '2026-11-21T00:30:00Z'), 90);
});

test('two and a bit days late loses 30%', () => {
  assert.equal(calculateFinalScore(100, assignment, '2026-11-23T08:00:00Z'), 70);
});

test('penalty is capped at 50%', () => {
  assert.equal(calculateFinalScore(100, assignment, '2026-12-05T10:00:00Z'), 50);
});
