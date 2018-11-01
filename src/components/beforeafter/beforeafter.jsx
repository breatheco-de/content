import React from 'react';
import BeforeAfterSlider from 'react-before-after-slider';

export const BeforeAfter = ({before, after, width, height}) => (<BeforeAfterSlider
        className="mx-auto"
        before={before}
        after={after}
        width={width | 640}
        height={height | 480}
        beforeProps={{
            backgroundSize: "contain"
        }}
        afterProps={{
            backgroundSize: "contain"
        }}
    />);