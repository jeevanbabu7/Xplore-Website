// LeftToRight, RightToLeft, BottomToTop, TopToBottom, FadeIn, FadeOut, ScaleIn, ScaleOut, RotateIn, RotateOut, SlideIn, SlideOut, ZoomIn, ZoomOut, 

export const LeftToRight = {
    from: { opacity: 0, transform: 'translateX(-100%)' },
    enter: { opacity: 1, transform: 'translateX(0)' },
    // leave: { opacity: 0, transform: 'translateX(-100%)' },
};

export const RightToLeft = {
    from: { opacity: 0, transform: 'translateX(100%)' },
    enter: { opacity: 1, transform: 'translateX(0)' },
    leave: { opacity: 0, transform: 'translateX(100%)' },
};

export const BottomToTop = {
    from: { opacity: 0, transform: 'translateY(100%)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(100%)' },
};

export const TopToBottom = {
    from: { opacity: 0, transform: 'translateY(-100%)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(-100%)' },
};

export const FadeIn = {
    from: { opacity: 0 },
    enter: { opacity: 1 },
    leave: { opacity: 0 },
};

export const FadeOut = {
    from: { opacity: 1 },
    enter: { opacity: 0 },
    leave: { opacity: 1 },
};

export const ScaleIn = {
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
};

export const ScaleOut = {
    from: { opacity: 1, transform: 'scale(1)' },
    enter: { opacity: 0, transform: 'scale(0)' },
    leave: { opacity: 1, transform: 'scale(1)' },
};

export const RotateIn = {
    from: { opacity: 0, transform: 'rotate(-180deg)' },
    enter: { opacity: 1, transform: 'rotate(0)' },
    leave: { opacity: 0, transform: 'rotate(-180deg)' },
};

export const RotateOut = {
    from: { opacity: 1, transform: 'rotate(0)' },
    enter: { opacity: 0, transform: 'rotate(-180deg)' },
    leave: { opacity: 1, transform: 'rotate(0)' },
};

export const SlideIn = {
    from: { opacity: 0, transform: 'translateY(100%)' },
    enter: { opacity: 1, transform: 'translateY(0)' },
    leave: { opacity: 0, transform: 'translateY(100%)' },
};

export const SlideOut = {
    from: { opacity: 1, transform: 'translateY(0)' },
    enter: { opacity: 0, transform: 'translateY(100%)' },
    leave: { opacity: 1, transform: 'translateY(0)' },
};

export const ZoomIn = {
    from: { opacity: 0, transform: 'scale(0)' },
    enter: { opacity: 1, transform: 'scale(1)' },
    leave: { opacity: 0, transform: 'scale(0)' },
};

export const ZoomOut = {
    from: { opacity: 1, transform: 'scale(1)' },
    enter: { opacity: 0, transform: 'scale(0)' },
    leave: { opacity: 1, transform: 'scale(1)' },
};

