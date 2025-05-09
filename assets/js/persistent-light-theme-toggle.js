// persistent-light-theme-toggle.js
// Copyright (c) 2025 Aryan
// SPDX-License-Identifier: BSD-3-Clause
// Version: 1.0.0
document.addEventListener('DOMContentLoaded', function () {
    var checkbox = document.querySelector('#light-mode-button');
    checkbox.checked = localStorage.getItem('light_mode') === 'true';
    checkbox.addEventListener('change', function () {
        localStorage.setItem('light_mode', checkbox.checked.toString());
    });
});
