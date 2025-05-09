// persistent-light-theme-toggle.ts

// Copyright (c) 2025 Aryan
// SPDX-License-Identifier: BSD-3-Clause

// Version: 1.0.0

document.addEventListener('DOMContentLoaded', () => {
  const checkbox = document.querySelector('#light-mode-button') as HTMLInputElement;

  checkbox.checked = localStorage.getItem('light_mode') === 'true';
  checkbox.addEventListener('change', () => {
    localStorage.setItem('light_mode', checkbox.checked.toString());
  });
});
