
interface IForm {
    handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void
    isLoading: boolean
}

export const Form = ({ handleSubmit, isLoading }: IForm) => {
    return (
        <form onSubmit={handleSubmit}>
            <select>
                <option value="someOption">Some option</option>
                <option value="otherOption">Other option</option>
            </select>
            <input type="text" name="form" disabled={isLoading} placeholder="Example: superman" />
            <button disabled={isLoading}>Search</button>
        </form>
    )
}