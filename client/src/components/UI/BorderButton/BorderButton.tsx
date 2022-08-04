import cl from './BorderButton.module.scss'

interface IBorderButtonProps {
    className?: string
    children: React.ReactNode
    onClick: () => void
}

const BorderButton: React.FunctionComponent<IBorderButtonProps> = ({ children, className, onClick }) => {
    return (
        <button
            className={[cl.button, className].join(' ')}
            onClick={onClick}
        >
            {children}
        </button>
    )
};

export default BorderButton;
