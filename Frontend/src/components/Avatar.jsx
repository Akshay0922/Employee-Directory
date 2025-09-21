import '../assets/styles/avatar.css';

/**
 * Avatar Component
 * - Shows first letter of name inside a colored circle
 *
 * @param {string} name - Person's name
 */
const Avatar = ({ name }) => {
    // First letter of name in uppercase
    const initial = name ? name[0].toUpperCase() : "?";

    // Pick a pastel color based on first letter
    const colors = ["#FFB6C1", "#87CEFA", "#FFD700", "#90EE90", "#FFA07A"];
    const colorIndex = name ? name.charCodeAt(0) % colors.length : 0;
    const bgColor = colors[colorIndex];

    return (
        <div
            className="avatar"
            style={{ backgroundColor: bgColor }}
        >
            <span>{initial}</span>
        </div>
    );
};

export default Avatar;