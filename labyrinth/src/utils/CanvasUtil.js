/**
 * Created by redeyed on 1/19/17.
 */

import Point from "../models/Point"

class CanvasUtil{
    static getAbsoluteCursorPosition(canvas, event)
    {
        let rect = canvas.getBoundingClientRect();
        let x = event.clientX - rect.left;
        let y = event.clientY - rect.top;
        return new Point(x,y);
    }

    static getCorrectedCursorPosition(canvas, event)
    {
        let {x,y} = CanvasUtil.getAbsoluteCursorPosition(canvas, event);
        x = x * canvas.width / canvas.clientWidth;
        y = y * canvas.height / canvas.clientHeight;
        return new Point(x,y);
    }
}

export default CanvasUtil;