import React, { useState } from 'react'
import { CSSTransition } from 'react-transition-group'
import cl from './DefaultSelect.module.scss'

const DefaultSelect = ({ returnValueFunction, defaultValue, options, className }) => {
    const [showOptions, setShowOptions] = useState(false)
    const [selectedName, setSelectedName] = useState(defaultValue)
    
    const selectOption = (id, name) => {
        setSelectedName(name);
        returnValueFunction(id);
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
                timeout={150}
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
                            key={option.id} 
                            className={cl.option}
                            onClick={() => selectOption(option.id, option.name)}
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