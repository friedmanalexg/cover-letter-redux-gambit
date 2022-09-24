# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `bin/rails
# db:schema:load`. When creating a new database, `bin/rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema[7.0].define(version: 2022_09_23_184334) do
  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "letter_blocks", force: :cascade do |t|
    t.bigint "letter_id", null: false
    t.bigint "prose_block_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["letter_id"], name: "index_letter_blocks_on_letter_id"
    t.index ["prose_block_id"], name: "index_letter_blocks_on_prose_block_id"
  end

  create_table "letters", force: :cascade do |t|
    t.string "letter_title"
    t.string "recipient"
    t.string "company"
    t.string "job_title"
    t.string "variable1"
    t.string "variable2"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_letters_on_user_id"
  end

  create_table "prose_blocks", force: :cascade do |t|
    t.string "block_title"
    t.string "block_type"
    t.text "prose_content"
    t.bigint "user_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.index ["user_id"], name: "index_prose_blocks_on_user_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "username"
    t.string "password_digest"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  add_foreign_key "letter_blocks", "letters"
  add_foreign_key "letter_blocks", "prose_blocks"
  add_foreign_key "letters", "users"
  add_foreign_key "prose_blocks", "users"
end
