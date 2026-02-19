'use client';

import { GitHubCalendar } from 'react-github-calendar';

export default function GithubCalendarClient() {
  return (
    <GitHubCalendar
      username="arshaqtk"
      blockSize={12}
      blockMargin={4}
      fontSize={14}
      theme={{
        light: ['#ebedf0', '#9be9a8', '#40c463', '#30a14e', '#216e39'],
        dark: ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'],
      }}
      style={{ color: 'rgba(255,255,255,0.7)' }}
    />
  );
}
