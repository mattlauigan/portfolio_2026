
type SvgType = {
    height?: string
    width?: string
}


export default function MyLogo({ width = "25", height = "25" }: SvgType) {
    return (
        <svg xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 360 456.17"
            width={width}
            height={height}>
            {/* Safe JSX format for internal SVG styles */}
            <style>{`.cls-1 { fill: #def0ff; }`}</style>
            <g id="Layer_2" data-name="Layer 2">
                <g id="Layer_1-2" data-name="Layer 1">
                    <path className="cls-1" d="M0,98.5V0H103.57A111.44,111.44,0,0,0,0,98.5Z" />
                    <polygon className="cls-1" points="41.17 201.29 222.84 415 41.17 415 41.17 201.29" />
                    <path className="cls-1" d="M360,0V415H276.88L113.33,222.62A111.44,111.44,0,0,0,117.87,0Z" />
                    <path className="cls-1" d="M181,111.21A70.28,70.28,0,0,1,59.85,159.7l-.09-.1q-1.53-1.59-2.94-3.29a69.93,69.93,0,0,1-15.65-35,70.67,70.67,0,0,1-.73-10.14,68.89,68.89,0,0,1,.46-8,70.28,70.28,0,0,1,140.1,8Z" />
                    <line className="cls-1" x1="0.03" y1="415" x2="0.03" y2="456.17" />
                    <line className="cls-1" x1="41.17" y1="456.15" x2="0.03" y2="456.17" />
                </g>
            </g>
        </svg>
    );
}