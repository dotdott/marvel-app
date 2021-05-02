export const transition = {
    duration: 2,
    ease: "easeOut",
    transition: {
        duration: 2
    }
};


export const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
}

export const loginVariants = {
    exit: { 
        y: "50%", 
        opacity: 0, 
        transition
    },
    enter: {
        y: "-170%",
        opacity: 1,
        transition
    }
};

export const loginLogoVariants = {
    exit: { 
        y: "-100%", 
        transition: {
            duration: 2, 
            ease: 'easeOut',  
        }       
    },
    enter: {
        y: "0%",
        opacity: 1,
        transition: {
            duration: 2,
            ease: 'easeOut',
        }
    }
}

export const logoVariants = {
    exit: { x: "100%", opacity: 0, transition: transition },
    enter: {
        x: "-135%",
        opacity: 1,
        transition,
    }
};

export const imageVariants = {
    exit: { x: "100%", opacity: 0, transition },
    enter: {
        x: "-0%",
        opacity: 1,
        transition,
    }
};

export const welcomeVariants = {
    exit: { opacity: 0, transition: { duration: 4, ease: 'easeOut'}  },
    enter: { opacity: 1.5, transition }
}