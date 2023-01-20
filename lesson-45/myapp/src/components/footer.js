export const Footer = (props) => {
    return (
        <div style={{ position: 'absolute', bottom: '0px', height: '300px'}}>
            <p> {props.text} {props.date} </p>
        </div>
    )
}