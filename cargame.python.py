import pygame
import random

pygame.init()

WIDTH, HEIGHT = 400, 600
screen = pygame.display.set_mode((WIDTH, HEIGHT))
pygame.display.set_caption("Car Racing Game")

WHITE = (255, 255, 255)
RED = (255, 0, 0)
BLUE = (0, 0, 255)

player = pygame.Rect(170, 500, 60, 80)
enemy = pygame.Rect(random.randint(0, 340), 0, 60, 80)

speed = 5
clock = pygame.time.Clock()

running = True

while running:
    clock.tick(60)
    screen.fill(WHITE)

    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            running = False

    keys = pygame.key.get_pressed()

    if keys[pygame.K_LEFT] and player.x > 0:
        player.x -= 5

    if keys[pygame.K_RIGHT] and player.x < WIDTH - 60:
        player.x += 5

    enemy.y += speed

    if enemy.y > HEIGHT:
        enemy.y = 0
        enemy.x = random.randint(0, 340)

    if player.colliderect(enemy):
        print("Game Over")
        running = False

    pygame.draw.rect(screen, BLUE, player)
    pygame.draw.rect(screen, RED, enemy)

    pygame.display.update()

pygame.quit()