$(function() {


    $("#my-text").focus(function() {
        var $this = $(this);
        $this.select();

        // Work around Chrome's little problem
        $this.mouseup(function() {
            // Prevent further mouseup intervention
            $this.unbind("mouseup");
            return false;
        });
    });

    $("#complite").click(function() {
        alert("عفواً , انت لم تقم بنشر الرسالة في 5 تعليقات لإتمام شروط المسابقة. يرجى نشر الرسالة والعودة مجدداً")

    });


});