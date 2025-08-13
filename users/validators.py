from django.core.exceptions import ValidationError
from django.utils.translation import gettext as _

class CustomPasswordValidator:
    def validate(self, password, user=None):
        if len(password) < 8:
            raise ValidationError(_('Password must be at least 8 characters long.'))
        if not any(c.islower() for c in password):
            raise ValidationError(_('Password must contain at least one lowercase letter.'))
        if not any(c.isupper() for c in password):
            raise ValidationError(_('Password must contain at least one uppercase letter.'))
        if not any(c.isdigit() for c in password):
            raise ValidationError(_('Password must contain at least one digit.'))
        if not any(c in '!@#$%^&*()_+-=[]{}|;:,.<>?' for c in password):
            raise ValidationError(_('Password must contain at least one special character.'))
        
    def get_help_text(self):
        return _(
            "Your password must be at least 8 characters long and contain at least "
            "one uppercase letter, one lowercase letter, one digit and one symbol."
        )
