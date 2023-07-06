import { TypeAnimation } from "react-type-animation";

const my_animation = () => {
    return (
        <TypeAnimation
            sequence={[
                'Developer',
                1000,
                'Programmer',
                1000,
                'Engineer',
                1000,
                'Human',
                () => {
                    console.log('Sequence complete');
                },

            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
        />
    );
}