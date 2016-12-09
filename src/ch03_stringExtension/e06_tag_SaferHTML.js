/**
 * Created by manlier on 2016/11/30.
 */

var message =
    SafeHTML`<p>${sender} has sent you a message</p>`

function SafeHTML(templateData) {
    var s = templateData[0];
    for(var i = 1; i < arguments.length; i++) {
        var arg = String(arguments[i]);

        s += arg.replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;");

        s += templateData[i];
    }
    return s;
}
