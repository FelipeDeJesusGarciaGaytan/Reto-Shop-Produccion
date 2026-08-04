import { animate, AnimatePresence, motion } from 'framer-motion';

<motion.div
initial={{ opacity: 0, y:20}}
animate={{ opacity: 1, y:0}}
transition={{ duration: 0.3}}
>
    <p>Hola</p>
    <motion.button 
    whileHover={{ scale:1.05 }}
    whileTap={{ scale: 0.95 }}
    >
        Agregar al carrito
    </motion.button>
    <motion.section
    initial={{opacity: 0, y:40}}
    whileInView= {{ opacity: 1, y:0}}
    viewport={{ once: true, amount:0.3 }}
    >
        Contenido de la seccion
    </motion.section>
    <AnimatePresence>
        {visible  && (
            <motion.div
            initial={{opacity: 0 }}
            animate={{opacity: 1}}
            exit={{opacity: 0, x:300}}
            >
                Contenido
            </motion.div>
        )}
    </AnimatePresence>

    <Parallax>
        <section>
            Tecnología para llevar tu experiencia al siguiente nivel
        </section>
         <section>
            Envíos rápidos
        </section>
    </Parallax>
</motion.div>
