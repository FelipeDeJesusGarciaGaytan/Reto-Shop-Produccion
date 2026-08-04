import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { Children, useRef } from 'react';

export default function Parallax({ children }){
    const target = useRef(null);
    const hero = Children.toArray(children)[0];
    const section = Children.toArray(children)[1];

    const { scrollYProgress } = useScroll({
        target,
        offset: ['start start', 'end start']
    });

    const y = useTransform(scrollYProgress, [0, 1], ['0%', '70%']);
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);
    const opacity = useTransform(scrollYProgress, [0, 0.75], [1, 0]);

    const scale2 = useSpring(useTransform(scrollYProgress, [0, 1], [0.8,1]));

    return(
        <motion.div ref={target}>
            <motion.div style={{ y, scale, opacity}}>
                {hero}
            </motion.div>
            <motion.div style={{ scale: scale2}}>
                {section}
            </motion.div>
        </motion.div>
    )
}