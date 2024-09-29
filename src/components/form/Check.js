function Check({checked, onChange , label,id})
{
    return (
        <div>
            <input 
                id={id}
                type="checkbox"
                className="form-check-input"
                onChange={(e)=> onChange(e.target.checked)}
            />
            <label htmlFor={id} className="form-check-label">{label}</label>
        </div>
    )
}

export default Check