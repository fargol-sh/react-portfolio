const LineGradient = ({ width = "w-full" }) => {
    return (
        // We use 'div' because 'bg-...' doesn'w work on
        // the border-color.
        <div className={`h-0.5 ${width} bg-gradient-rainblue`} />
    );  
};

export default LineGradient;