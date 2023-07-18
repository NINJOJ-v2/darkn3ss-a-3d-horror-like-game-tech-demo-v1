def on_a_pressed():
    Render.move_with_controller(3, 4, 2)
    pause(10)
    Render.set_attribute(Render.attribute.FOV, 0.7)
    pause(10)
    Render.set_attribute(Render.attribute.FOV, 0.725)
    pause(10)
    Render.set_attribute(Render.attribute.FOV, 0.75)
    sprint.value += -1
controller.A.on_event(ControllerButtonEvent.PRESSED, on_a_pressed)

sprint: StatusBarSprite = None
tiles.set_current_tilemap(tilemap("""
    Level1
"""))
thePlayer = Render.get_render_sprite_variable()
sprint = statusbars.create(160, 8, StatusBarKind.energy)
sprint.set_status_bar_flag(StatusBarFlag.SMOOTH_TRANSITION, True)
sprint.set_color(5, 1)
sprint.position_direction(CollisionDirection.BOTTOM)
sprint.max = 100
sprint.value = 100

def on_update_interval():
    if not (controller.A.is_pressed()):
        Render.move_with_controller(1, 3, 1)
        Render.set_attribute(Render.attribute.FOV, Render.get_default_fov())
game.on_update_interval(100, on_update_interval)
