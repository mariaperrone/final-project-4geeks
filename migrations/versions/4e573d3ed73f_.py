"""empty message

Revision ID: 4e573d3ed73f
Revises: 3c8e74640996
Create Date: 2021-11-08 22:37:16.611675

"""
from alembic import op
import sqlalchemy as sa


# revision identifiers, used by Alembic.
revision = '4e573d3ed73f'
down_revision = '3c8e74640996'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('linea', 'origen',
               existing_type=sa.VARCHAR(length=80),
               nullable=True)
    op.alter_column('linea', 'destino',
               existing_type=sa.VARCHAR(length=80),
               nullable=True)
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.alter_column('linea', 'destino',
               existing_type=sa.VARCHAR(length=80),
               nullable=False)
    op.alter_column('linea', 'origen',
               existing_type=sa.VARCHAR(length=80),
               nullable=False)
    # ### end Alembic commands ###