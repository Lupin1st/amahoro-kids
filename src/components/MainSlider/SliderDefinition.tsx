import { Button } from '@mui/material';
import Link from 'next-intl/link';

const SlideDefinition = (
    imgSrc: string,
    href: string,
    label: string,
    text: string,
    Icon: React.ReactNode,
    buttonText: string) => {
    return (
        <div>
            <div className="w-full">
                <img
                    src={imgSrc}
                    style={{ marginLeft: 'auto', marginRight: 'auto' }}
                />
            </div>
            <div className="absolute bg-blue-200 bg-opacity-50 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <h1>{label}</h1>
                <p>{text}</p>
            </div>
            <div className="absolute bg-blue-200 bg-opacity-50 top-3/4 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-center">
                <Button
                    component={Link}
                    href={href}
                    variant="contained"
                    startIcon={Icon}
                >
                    {buttonText}
                </Button>
            </div>
        </div>
    )
}

export default SlideDefinition;
