/*
var coll = document.getElementsByClassName("ho_to_buttons");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;
        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}*/
var coll = document.getElementsByClassName("ho_to_buttons");
var i;

for (i = 0; i < coll.length; i++) {
    coll[i].addEventListener("click", function () {
        this.classList.toggle("active");
        var content = this.nextElementSibling;

        if (content.style.maxHeight) {
            content.style.maxHeight = null;
        } else {
            content.style.maxHeight = content.scrollHeight + "px";
        }

        // 👇 Trigger footer adjustment after content expansion
        setTimeout(adjustFooterPosition, 300); // allow animation to finish
    });
}
/*
function adjustFooterPosition() {
    const footerImage = document.getElementById("footer_image");
    const footerDiv = document.getElementById("footer_position_set");

    const footerTop = document.querySelector("#Legal_Solutions").getBoundingClientRect().bottom + window.scrollY + 50;

    footerImage.style.position = "absolute";
    footerImage.style.top = `${footerTop}px`;

    footerDiv.style.position = "absolute";
    footerDiv.style.top = `${footerTop + footerImage.offsetHeight}px`;
}*/
function adjustFooterPosition() {
    const footerWrapper = document.getElementById("footer_wrapper");
    const footerDiv = document.getElementById("footer_position_set");
    const footerImage = document.getElementById("footer_image");

    // Get position after Legal_Solutions section
    const anchorBottom = document.querySelector("#Legal_Solutions").getBoundingClientRect().bottom + window.scrollY + 50;

    // Position wrapper at the right spot
    footerWrapper.style.position = "absolute";
    footerWrapper.style.top = `${anchorBottom}px`;

    // Offset image downward based on the height of footer_position_set
    footerImage.style.marginTop = `${footerDiv.offsetHeight}px`;

    // Update body height
    const totalHeight = anchorBottom + footerWrapper.offsetHeight;
    document.body.style.height = `${totalHeight}px`;
}



