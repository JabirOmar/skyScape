class CreatePassengers < ActiveRecord::Migration[7.0]
  def change
    create_table :passengers do |t|
      t.string :departure
      t.string :destination
      t.string :firstName
      t.string :middleName
      t.string :lastName
      t.string :nationality
      t.string :gender
      t.string :title
      t.integer :age
      t.date :departureDate
      t.date :returnDate

      t.timestamps
    end
  end
end
