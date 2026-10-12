import React from 'react'
import {subjectTone} from '../../utils/data'



const ProgressChart = ({ durationBySubject }) => {
  const totalHours = Object.values(durationBySubject).reduce(
    (total, duration) => total + duration,
    0
  );

  return (
    <section className="mt-[15px] rounded-[16px] border border-[#303030] bg-[#171717] px-[15px] pb-[14px] pt-[15px]">
      <div className="mb-[9px] flex items-center justify-between">
        <h2 className="text-[18px] font-semibold">Hours this week</h2>
        <span className="text-[16px] font-semibold text-[#d7e7e8]">
          {totalHours} hrs total
        </span>
      </div>

      <div className="space-y-[8px]">
        {Object.entries(durationBySubject).map(([subject, duration]) => {
          const width = totalHours > 0
            ? (duration / totalHours) * 100
            : 0;

          return (
            <div
              key={subject}
              className="grid grid-cols-[68px_minmax(0,1fr)_42px] items-center gap-[10px] text-[16px]"
            >
              <span className="font-medium text-[#d6dfe0]">
                {subject}
              </span>

              <div className="h-[10px] overflow-hidden rounded-full bg-[#111]">
                <div
                  className={`h-full rounded-full ${
    subjectTone[subject] || 'bg-gray-500'
  }`}
                  style={{ width: `${width}%` }}
                />
              </div>

              <span className="text-right font-semibold">
                {duration}h
              </span>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default ProgressChart
