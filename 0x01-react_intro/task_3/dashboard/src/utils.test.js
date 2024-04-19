import { getFullYear, getFooterCopy } from './utils';
import { getLatestNotification } from './Notifications';

describe('getFullYear function', () => {
  it('returns the current year', () => {
    const year = getFullYear();
    expect(typeof year).toBe('number');
    expect(year).toBe(new Date().getFullYear());
  });
});

describe('getFooterCopy function', () => {
  it('returns "Holberton School" when isIndex is true', () => {
    expect(getFooterCopy(true)).toBe('Holberton School');
  });

  it('returns "Holberton School main dashboard" when isIndex is false', () => {
    expect(getFooterCopy(false)).toBe('Holberton School main dashboard');
  });
});

describe('getLatestNotification function', () => {
  it('returns the latest notification string', () => {
    const notification = getLatestNotification();
    expect(notification).toBe('<strong>Urgent requirement</strong> - complete by EOD');
  });
});

