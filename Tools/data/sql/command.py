#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Python CLI Print-Only Modern UI (Interactive)
---------------------------------------------
- 요구사항: print를 기반으로 한 CLI 인터페이스
- 아키텍처: 3 블록 구성
    1) Core Utilities & Theme
    2) UI Components (Banner, Panel, Menu, Progress)
    3) Interactive Router (argparse) & Pages
"""

from __future__ import annotations
import os
import shutil
import argparse
from datetime import datetime

# ────────────────────────────────────────────────────────────────────────────────
# BLOCK 1) CORE UTILITIES & THEME
# ────────────────────────────────────────────────────────────────────────────────

try:
    import colorama  # type: ignore

    colorama.just_fix_windows_console()
except Exception:
    pass

RESET = "\033[0m"
BOLD = "\033[1m"
ITALIC = "\033[3m"


def fg256(n: int) -> str:
    return f"\033[38;5;{max(0, min(255, n))}m"


def bg256(n: int) -> str:
    return f"\033[48;5;{max(0, min(255, n))}m"


def rgb_to_256(r: int, g: int, b: int) -> int:
    r, g, b = [max(0, min(255, v)) for v in (r, g, b)]
    if r == g == b:
        if r < 8:
            return 16
        if r > 248:
            return 231
        return 232 + int(((r - 8) / 247) * 24)

    def q(v: int) -> int:
        return int(round((v / 255) * 5))

    return 16 + 36 * q(r) + 6 * q(g) + q(b)


def term_width(default: int = 80) -> int:
    try:
        return shutil.get_terminal_size().columns
    except Exception:
        return default


THEME = {
    "primary": ("#7c3aed", "#06b6d4"),
    "accent": ("#22c55e", "#84cc16"),
    "fg_muted": fg256(rgb_to_256(160, 166, 175)),
    "fg": fg256(rgb_to_256(229, 231, 235)),
    "bg_soft": bg256(rgb_to_256(24, 24, 27)),
    "shadow": fg256(237),
}

# ────────────────────────────────────────────────────────────────────────────────
# BLOCK 2) UI COMPONENTS
# ────────────────────────────────────────────────────────────────────────────────

BOX = {"tl": "╭", "tr": "╮", "bl": "╰", "br": "╯", "h": "─", "v": "│"}


def banner(title: str, subtitle: str | None = None, width: int | None = None) -> None:
    w = width or min(max(48, term_width()), 120)
    print(
        THEME["bg_soft"]
        + THEME["fg"]
        + f"{BOX['tl']}{BOX['h']*(w-2)}{BOX['tr']}"
        + RESET
    )
    print(
        THEME["bg_soft"]
        + THEME["fg"]
        + f"{BOX['v']} {title.center(w-4)} {BOX['v']}"
        + RESET
    )
    if subtitle:
        print(
            THEME["bg_soft"]
            + THEME["fg"]
            + f"{BOX['v']} {subtitle.center(w-4)} {BOX['v']}"
            + RESET
        )
    print(
        THEME["bg_soft"]
        + THEME["fg"]
        + f"{BOX['bl']}{BOX['h']*(w-2)}{BOX['br']}"
        + RESET
    )


def kv_panel(title: str, items: list[tuple[str, str]], w: int | None = None) -> None:
    w = w or min(max(40, term_width()), 100)
    print(BOLD + title + RESET)
    print(THEME["fg_muted"] + ("─" * w) + RESET)
    for k, v in items:
        print(f"{THEME['fg']}{k:>10}:{RESET} {THEME['fg_muted']}{v}{RESET}")
    print(THEME["fg_muted"] + ("─" * w) + RESET)


def menu(options: list[str], cols: int = 2) -> None:
    w = min(max(40, term_width()), 100)
    col_w = (w - (cols - 1) * 3) // cols
    for i, opt in enumerate(options):
        label = f"{i+1:>2}. {opt}".ljust(col_w)
        print(
            THEME["fg_muted"] + label + RESET,
            end="  |  " if (i % cols) != (cols - 1) else "\n",
        )
    if len(options) % cols != 0:
        print()


def progress_bar(ratio: float, w: int | None = None, label: str | None = None) -> None:
    w = w or 60
    fill_w = max(0, w - 10)
    n = int(fill_w * ratio)
    bar = "█" * n + "░" * (fill_w - n)
    pct = f"{int(ratio*100):3d}%"
    print(f"[{bar}] {pct} {label or ''}")


# ────────────────────────────────────────────────────────────────────────────────
# BLOCK 3) INTERACTIVE ROUTER & PAGES
# ────────────────────────────────────────────────────────────────────────────────


def clear_screen() -> None:
    os.system("cls" if os.name == "nt" else "clear")


def pause(msg: str = "계속하려면 Enter...") -> None:
    try:
        input(THEME["fg_muted"] + msg + RESET)
    except EOFError:
        pass


def render_shell_frame(args: argparse.Namespace) -> None:
    clear_screen()
    banner(
        args.title or "Modern CLI Tool",
        args.subtitle or "Print-Only Interface • Python",
    )
    kv_panel(
        "Session",
        [
            ("Run At", datetime.now().strftime("%Y-%m-%d %H:%M:%S")),
            ("Name", args.name or "-"),
            ("Mode", args.mode),
            ("Verbose", "ON" if args.verbose else "OFF"),
            ("Output", args.output or "stdout"),
            ("Retries", str(args.retries)),
        ],
    )
    menu(["Analyze", "Transform", "Validate", "Export", "Help", "Quit"], cols=3)


def menu_interactive(options: list[str]) -> int:
    while True:
        choice = input(THEME["fg_muted"] + "\n👉 번호 입력: " + RESET).strip().lower()
        if choice in {"q", "quit", "exit"}:
            return len(options) - 1
        if choice.isdigit():
            idx = int(choice) - 1
            if 0 <= idx < len(options):
                return idx
        print("⚠️ 잘못된 입력입니다. 다시 시도하세요.")


def page_template(name: str) -> None:
    clear_screen()
    banner(f"{name} Page", "Select → Execute → Back")
    print(THEME["fg"] + f"{name} 작업 실행 중..." + RESET)
    for i in range(0, 101, 20):
        progress_bar(i / 100, label="processing")
    pause()


ROUTES = {
    0: lambda args: page_template("Analyze"),
    1: lambda args: page_template("Transform"),
    2: lambda args: page_template("Validate"),
    3: lambda args: page_template("Export"),
    4: lambda args: page_template("Help"),
}


def build_parser() -> argparse.ArgumentParser:
    p = argparse.ArgumentParser(
        prog="print-ui",
        description="Interactive CLI with print-based UI and numbered navigation.",
    )
    p.add_argument("--name", "-n", help="사용자 이름", default=None)
    p.add_argument("--mode", "-m", choices=["fast", "safe", "pro"], default="fast")
    p.add_argument("--verbose", "-v", action="store_true")
    p.add_argument("--output", "-o")
    p.add_argument("--retries", "-r", type=int, default=3)
    p.add_argument("--title")
    p.add_argument("--subtitle")
    return p


def main(argv: list[str] | None = None) -> int:
    args = build_parser().parse_args(argv)
    options = ["Analyze", "Transform", "Validate", "Export", "Help", "Quit"]
    while True:
        render_shell_frame(args)
        idx = menu_interactive(options)
        if idx == len(options) - 1:
            clear_screen()
            banner("Goodbye!", "Have a nice day ✨")
            return 0
        ROUTES.get(idx, lambda args: None)(args)


if __name__ == "__main__":
    raise SystemExit(main())
