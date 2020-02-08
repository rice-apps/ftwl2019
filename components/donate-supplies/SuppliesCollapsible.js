import React from 'react';
import Collapsible from 'react-collapsible';

function SuppliesCollapsible(props) {
    return (
        <div>
            {props.supplies.sections.map(section => {
                return <Collapsible trigger={section.title}>
                    {section.rows}
                </Collapsible>
            }
            )}
        </div>
    );
}
export default SuppliesCollapsible;
