/**
 * Returns the number of seconds' difference between the UTC offsets of two time
 * zones, at a particular moment in time.
 *
 * @param {Temporal.Absolute} instant - A moment in time
 * @param {Temporal.TimeZone} sourceTimeZone - A time zone to examine
 * @param {Temporal.TimeZone} targetTimeZone - A second time zone to examine
 * @returns {number} The number of seconds difference between the time zones'
 *   UTC offsets
 */
function getUtcOffsetDifferenceSecondsAtInstant(instant, sourceTimeZone, targetTimeZone) {
  const sourceOffsetNs = sourceTimeZone.getOffsetNanosecondsFor(instant);
  const targetOffsetNs = targetTimeZone.getOffsetNanosecondsFor(instant);
  return (targetOffsetNs - sourceOffsetNs) / 1e9;
}

const instant = Temporal.Absolute.from('2020-01-09T00:00Z');
const nyc = Temporal.TimeZone.from('America/New_York');
const chicago = Temporal.TimeZone.from('America/Chicago');

// At this instant, Chicago is 3600 seconds earlier than New York
assert.equal(getUtcOffsetDifferenceSecondsAtInstant(instant, nyc, chicago), -3600);

// Note: This file deals with only Temporal.Absolute, so it is calendar-independent.
