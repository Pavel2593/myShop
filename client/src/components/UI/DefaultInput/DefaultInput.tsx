import cl from './DefaultInput.module.scss'

interface IDefaultInputProps {
    className?: string
    placeholder?: string
    value: string
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
}

const DefaultInput: React.FunctionComponent<IDefaultInputProps> = ({ className, value, placeholder, onChange }) => {
    return (
        <input
            value={value}
            placeholder={placeholder}
            className={[cl.input, className].join(' ')}
            onChange={onChange}
        />
    )
};

export default DefaultInput;