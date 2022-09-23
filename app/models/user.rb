class User < ApplicationRecord
    has_many :letters
    has_many :prose_blocks, through: :letters
    
    has_secure_password
end