import confetti from 'canvas-confetti';

export function showSuccessEffect() {
  confetti({
    zIndex: 999,
    particleCount: 100,
    spread: 70,
    origin: { x: 0.75, y: 0.8 },
  });
}
