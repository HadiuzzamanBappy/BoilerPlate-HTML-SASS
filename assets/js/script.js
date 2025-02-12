$(document).ready(function () {
  // Handle click events for all toggle buttons
  $(".tgl-btn").on("click", function () {
    if (!$(this).prop("disabled") && !$(this).hasClass("disabled")) {
      const activeClasses = [
        "active",
        "active-primary",
        "active-secondary",
        "active-info",
        "active-warning",
        "active-error",
        "active-success",
      ];

      const currentActiveClass = activeClasses.find((cls) =>
        $(this).hasClass(cls)
      );

      if (currentActiveClass) {
        $(this).removeClass(currentActiveClass);
        $(this).attr("active-type", currentActiveClass);
      } else {
        const activeType = $(this).attr("active-type");

        if (activeType) {
          $(this).addClass(activeType);
        } else {
          $(this).addClass("active");
        }

        $(this).removeAttr("data-active-type");
      }
    }
  });

  // Handle click events for all toggle button groups
  $(".tgl-btn-group .tgl-btn").on("click", function () {
    if (!$(this).hasClass("disabled")) {
      // Get the variant class from the parent group (e.g., active-primary, active-secondary)
      const $group = $(this).closest(".tgl-btn-group");
      const variantClass = $group
        .attr("class")
        .split(" ")
        .find((cls) => cls.startsWith("active-"));

      // Remove all active classes from buttons in the same group
      $group
        .find(".tgl-btn")
        .removeClass(
          "active active-primary active-secondary active-info active-warning active-error active-success"
        );

      // Add the variant class to the clicked button
      if (variantClass) {
        $(this).addClass(variantClass);
      } else {
        $(this).addClass("active");
      }
    }
  });

  // Handle focus, blur, and input events for all input fields
  $(".input-field").on("focus blur input", function () {
    const $input = $(this);
    const $label = $input.prev(".input-label");

    // Add or remove the "floating" class based on input state
    if ($input.is(":focus") || $input.val().trim() !== "") {
      $label.addClass("floating");
    } else {
      $label.removeClass("floating");
    }
  });

  let styleContent = ""; // Store styles
  $("[class*='progress-']").each(function () {
    let percentage = $(this).attr("data-percentage") || 0;
    let classList = $(this).attr("class").split(" ");
    let targetClass = classList.find(
      (cls) =>
        cls.startsWith("progress-linear-") ||
        cls.startsWith("progress-circular-")
    );

    if (!targetClass) return;

    if (targetClass.startsWith("progress-linear-")) {
      styleContent += `.${targetClass}::after { width: ${percentage}%; transition: width 1s ease-in-out; }\n`;
    } else if (targetClass.startsWith("progress-circular-")) {
      let currentBackground = $(this).css("background") || "";
      let newBackground = currentBackground.replace(
        /(\d+(\.\d+)?)deg/,
        `${percentage * 3.6}deg`
      );
      $(this).css({
        background: newBackground,
        transition: "background 1s ease-in-out",
      });
    }
  });

  if (styleContent) {
    $("head").append(`<style>${styleContent}</style>`);
  }
  
  // Dashboard Collapse and Expand
  $(".main-nav-dropdown-toggle").click(function () {
    $(this)
      .closest(".main-nav-dropdown")
      .toggleClass("show")
      .find(".main-nav-dropdown")
      .removeClass("show");
    $(this).parent().siblings().removeClass("show");
  });

  // Menu Toggle
  $(".menu-toggle").click(function () {
    if (window.matchMedia("(max-width: 990px )").matches) {
      $(".main-nav").toggleClass("mobile-show");
    } else {
      $("body").toggleClass("main-compact");
    }
  });
});
