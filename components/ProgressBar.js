import React from 'react'

export default function ProgressBar({total_fund, tmp_fund}) {
    let percentage = (tmp_fund / total_fund) * 100
    return (
        <div>
            <div className="flex-start flex h-1.5 w-full overflow-hidden rounded-sm bg-blue-gray-50 font-sans text-xs font-medium">
                <div
                    className="flex h-full items-baseline justify-center overflow-hidden break-all bg-blue-500 text-white"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    )
}
