import * as React from "react"
import Svg, { Defs, ClipPath, Path, Mask, Rect, G } from "react-native-svg"
export default (props:any) => {
    return   <Svg
        xmlns="http://www.w3.org/2000/svg"
        width={"42%"}
        height={"42%"}
        viewBox="0 0 682.66669 682.66669"
        {...props}
    >
        <Defs>
            <ClipPath id="b">
                <Path d="M0 512h512V0H0z" />
            </ClipPath>
        </Defs>
        <Mask id="a">
            <Rect x={0} y={0} width="100%" height="100%" fill="#fff" />
            <Path
                transform="matrix(1.33333 0 0 -1.33333 0 682.667) translate(73.777 70.002)"
                d="M0 0c5.508 0 10 4.492 10 10 0 5.509-4.492 10-10 10s-10-4.491-10-10C-10 4.492-5.508 0 0 0"
                fill="#000"
                fillOpacity={1}
                fillRule="evenodd"
                stroke="none"
            />
            <Path
                transform="matrix(1.33333 0 0 -1.33333 0 682.667) translate(438.222 421.998)"
                d="M0 0c5.509 0 10.001 4.492 10.001 10S5.509 20 0 20c-5.508 0-10-4.492-10-10S-5.508 0 0 0"
                fill="#000"
                fillOpacity={1}
                fillRule="evenodd"
                stroke="none"
            />
        </Mask>
        <G mask="url(#a)">
            <G
                clipPath="url(#b)"
                transform="matrix(1.33333 0 0 -1.33333 0 682.667)"
            >
                <Path
                    d="M0 0v-30.002h260.426L364.444 74.017v277.979m0 80v30.002H0V80"
                    transform="translate(73.777 40.002)"
                    fill="none"
                    stroke="#FFF"
                    strokeWidth={20}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={22.926}
                    strokeDasharray="none"
                    strokeOpacity={1}
                />
                <Path
                    d="M0 0v104.019h104.019z"
                    transform="translate(334.203 10)"
                    fill="none"
                    stroke="#FFF"
                    strokeWidth={20}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={22.926}
                    strokeDasharray="none"
                    strokeOpacity={1}
                />
                <Path
                    d="M0 0l59.338 59.339M149.211 0l59.339 59.339M59.338 0L0 59.339M208.55 0l-59.339 59.339m59.339-186.004c-25.88 20.852-63.017 33.92-104.276 33.92-41.257 0-78.394-13.068-104.274-33.919"
                    transform="translate(151.725 337.666)"
                    fill="none"
                    stroke="#FFF"
                    strokeWidth={20}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={22.926}
                    strokeDasharray="none"
                    strokeOpacity={1}
                />
                <Path
                    d="M0 0c5.508 0 10 4.492 10 10 0 5.509-4.492 10-10 10s-10-4.491-10-10C-10 4.492-5.508 0 0 0"
                    transform="translate(73.777 70.002)"
                    fill="#FFF"
                    fillOpacity={1}
                    fillRule="evenodd"
                    stroke="none"
                />
                <Path
                    d="M0 0c5.509 0 10.001 4.492 10.001 10S5.509 20 0 20c-5.508 0-10-4.492-10-10S-5.508 0 0 0"
                    transform="translate(438.222 421.998)"
                    fill="#FFF"
                    fillOpacity={1}
                    fillRule="evenodd"
                    stroke="none"
                />
            </G>
        </G>
    </Svg>
}