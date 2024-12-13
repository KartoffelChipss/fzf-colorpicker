import { FunctionalComponent, JSX } from "preact";
import "./Modal.scss";
import { Xmark } from "dazzle-icons";
import { useEffect } from "preact/hooks";

interface ModalProps {
    isOpen?: boolean;
    onClose?: () => void;
    className?: string;
    closeBtn?: boolean;
    children?: JSX.Element | JSX.Element[];
}

const Modal: FunctionalComponent<ModalProps> = ({ isOpen, onClose, className, closeBtn, children }) => {
    const handleClose = () => {
        if (onClose) onClose();
    }

    const handleBackdropClick = (event: MouseEvent) => {
        if ((event.target as HTMLElement).classList.contains('modal')) {
            handleClose();
        }
    };

    useEffect(() => {
        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                handleClose();
            }
        };

        if (isOpen) {
            document.addEventListener("keydown", handleKeyDown);
        }

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    return (
        <div 
            className={`modal ${isOpen ? 'active' : ''} ${className}`}
            onClick={handleBackdropClick}
        >
            <div className="modal-content">
                {closeBtn && (
                    <button
                        className={"closeBtn iconOnly"}
                        onClick={handleClose}
                    >
                        <Xmark />
                    </button>
                )}
                {children}
            </div>
        </div>
    );
}

export default Modal;