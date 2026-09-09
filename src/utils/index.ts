import type { FullscreenDocument, FullscreenElement } from "@/types";

export function isTypingTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) {
    return false;
  }

  const tagName = target.tagName;
  return (
    tagName === "INPUT" ||
    tagName === "TEXTAREA" ||
    tagName === "SELECT" ||
    target.isContentEditable
  );
}

export function isFullscreenSupported() {
  const doc = document as FullscreenDocument;
  return Boolean(doc.fullscreenEnabled || doc.webkitFullscreenEnabled);
}

export function getFullscreenElement() {
  const doc = document as FullscreenDocument;
  return document.fullscreenElement ?? doc.webkitFullscreenElement ?? null;
}

export async function requestFullscreen(element: HTMLElement) {
  if (element.requestFullscreen) {
    await element.requestFullscreen();
    return;
  }

  const webkitElement = element as FullscreenElement;
  if (webkitElement.webkitRequestFullscreen) {
    await webkitElement.webkitRequestFullscreen();
  }
}

export async function exitFullscreen() {
  if (document.exitFullscreen) {
    await document.exitFullscreen();
    return;
  }

  const doc = document as FullscreenDocument;
  if (doc.webkitExitFullscreen) {
    await doc.webkitExitFullscreen();
  }
}
