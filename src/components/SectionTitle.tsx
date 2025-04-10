import React from "react";

const SectionTitle: React.FC<{title: string, subtitle: string}> = ({title, subtitle}) => {
    return (
        <div className="text-center mb-3 lg:mb-5">
            <h3 className="text-2xl lg:text-4xl font-medium">{title}</h3>
            <p className="text-primary">{subtitle}</p>
        </div>
    );
}

export default SectionTitle;
