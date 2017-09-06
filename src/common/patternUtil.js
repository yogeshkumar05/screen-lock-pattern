export function createDotStyles(id) {
    let style = {};
    let left=60;
    let top=150;
    (id>3 && id<=6)?top=300:((id>6 && id<=9)?top=450:top=150);
    (id%3==2)?left=260:((id%3==0)?left=460:left=60);
    
    style={
        "position":"absolute",
        "left":left,
        "top":top
    }
    return style;
}