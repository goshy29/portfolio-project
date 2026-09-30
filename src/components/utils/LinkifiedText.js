const LINK_PATTERN = /(https?:\/\/[^\s]+|[\w.+-]+@[\w-]+\.[\w.]+)/g;

function toLink(part, index) {
    if (part.includes("@") && !part.startsWith("http")) {
        return <a key={index} href={`mailto:${part}`}>{part}</a>;
    }

    // Local dev addresses are instructions, not real links.
    if (part.includes("localhost")) {
        return part;
    }

    return (
        <a key={index} href={part} target="_blank" rel="noopener noreferrer">
            {part}
        </a>
    );
}

function LinkifiedText(props) {
    const parts = props.text.split(LINK_PATTERN);

    return parts.map((part, index) => (index % 2 === 1 ? toLink(part, index) : part));
}

export default LinkifiedText;
