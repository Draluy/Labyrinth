/**
 * Created by redeyed on 1/19/17.
 */


class CanvasUtil{
    static getCursorPosition(canvas, event)
    {
        var rect = canvas.getBoundingClientRect();
        var x = event.clientX - rect.left;
        var y = event.clientY - rect.top;
        return {"x" : x, "y" : y};
    }
}

export default CanvasUtil;