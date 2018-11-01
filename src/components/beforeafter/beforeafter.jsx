import React from 'react';
import BeforeAfterSlider from 'react-before-after-slider';

export const BeforeAfter = ({before, after, width, height}) => (<div className="mx-auto text-center">
    <BeforeAfterSlider
        before={before}
        after={after}
        width={width | 640}
        height={height | 480}
    />
</div>);