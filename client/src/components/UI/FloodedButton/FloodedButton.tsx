import cl from './FloodedButton.module.scss'

interface IFloodedButtonProps {
    className?: string
    type?: string
    children: React.ReactNode
    onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void
}

const FloodedButton: React.FunctionComponent<IFloodedButtonProps> = ({ children, className, onClick }) => {
    return (
        <button
            className={[cl.button, className].join(' ')}
            onClick={onClick}
        >
            {children}
        </button>
    )
};

export default FloodedButton;
