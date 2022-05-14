import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import cl from './DefaultSelect.module.scss'

const DefaultSelect = ({ returnValueFunction, defaultValue, options, className }) => {
    const [showOptions, setShowOptions] = useState(false)
    const [selectedName, setSelectedName] = useState(defaultValue)
    
    const selectOption = (value, name) => {
        setSelectedName(name);
        returnValueFunction(value);
        setShowOptions(false);
    }

    const classesList = [className];
    if (showOptions) {
        classesList.push(cl.active)
    }

    return (
        <div className={classesList.join(' ')}>
            <div
                className={cl.select}
                onClick={() => setShowOptions(!showOptions)}
            >
                {selectedName}
            </div>
            <CSSTransition
                in={showOptions}
                timeout={300}
                classNames={{
                    enter: cl.animationEnter,
                    enterActive: cl.animationEnterActive,
                    exit: cl.animationExit,
                    exitActive: cl.animationExitActive,
                }}
                unmountOnExit
            >
                <div className={cl.options}>
                    {
                        options.map((option) => (
                            <div 
                            key={option.value} 
                            className={cl.option}
                            onClick={() => selectOption(option.value, option.name)}
                            >
                                {option.name}
                            </div>
                        ))
                    }
                </div>
            </CSSTransition>
        </div>
    )
}

export default DefaultSelect