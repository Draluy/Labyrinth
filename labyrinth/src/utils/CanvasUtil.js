/**
 * Created by redeyed on 1/19/17.
 */


class CanvasUtil{
    static getAbsoluteCursorPosition(canvas, event)
    {
        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        return {"x" : x, "y" : y};
    }

    static getCorrectedCursorPosition(canvas, event)
    {
        let {x,y} = CanvasUtil.getAbsoluteCursorPosition(canvas, event);
        x = x * canvas.width / canvas.clientWidth;
        y = y * canvas.height / canvas.clientHeight;
        return {"x" : x, "y" : y};
    }
}

export default CanvasUtil;