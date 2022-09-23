class CreateLetters < ActiveRecord::Migration[7.0]
  def change
    create_table :letters do |t|
      t.string :letter_title
      t.string :recipient
      t.string :company
      t.string :job_title
      t.string :variable1
      t.string :variable2

      t.timestamps
    end
  end
end
