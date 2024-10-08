import {
  Body,
  Controller,
  Get,
  HttpStatus,
  InternalServerErrorException,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Request,
  Put,
  NotFoundException,
  Delete,
  Param,
  ParseIntPipe,
  BadRequestException,
  UseInterceptors,
  UploadedFile,
  Res,
  HttpCode,
} from "@nestjs/common";
import { PatientService } from "./patient.service";
import {
  AppointmentDTO,
  BillingDTO,
  FeedbackDTO,
  ForgetPasswordDTO,
  OTP_ReceiverDTO,
  Patient_ProfileDTO,
  PatientDTO,
} from "./patient.dto";
import { JwtService } from "@nestjs/jwt";
import { AuthGuard } from "./auth/auth.guard";
import { FileInterceptor } from "@nestjs/platform-express";
import { diskStorage, MulterError } from "multer";

@Controller("api/patient")
export class PatientController {
  constructor(
    private readonly patientService: PatientService,
    private readonly jwtService: JwtService,
  ) {
    // Empty Constructor
  }

  @Get("/index")
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK) // Set the status code to 200 (OK)
  getIndex(): any {
    return "Relax! Patient is Alive.";
  }
  @Get("/patient_service")
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK) // Set the status code to 200 (OK)
  getService(): any {
    return this.patientService.get_service();
  }

 

  //   #1
  @Post("/signup/patient_details")
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK) 
  async Patient_Details_Create(@Body() patient_info: PatientDTO): Promise<any> {
    try {
      const saved_patient =
        await this.patientService.Create_Patient(patient_info);
      if (saved_patient > 0) {
        return saved_patient;
      } else {
        throw new InternalServerErrorException(
          "Patient data could not be saved",
        );
      }
    } catch (e) {
      throw new InternalServerErrorException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: e.message,
      });
    }
  }

  //   #2
  @Get("/profile")
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK) 
  async View_own_Profile(@Request() req): Promise<any> {
    try {
      return await this.patientService.Find_Patient_By_Email(req.user.email);
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  //   #3
  @Put("/profile/update")
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK) 
  async Update_own_Profile(
    @Request() req,
    @Body() updated_data: Patient_ProfileDTO,
  ): Promise<any> {
    try {
      return await this.patientService.Update_Own_Profile_Details(
        req.user.email,
        updated_data,
      );
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  //   #4
  @Post("/appointment/create")
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK) 
  async Create_an_Appointment(
    @Request() req,
    @Body() appointment_info: AppointmentDTO,
  ): Promise<any> {
    try {
      const saved_appointment = await this.patientService.Create_an_Appointment(
        req.user.email,
        appointment_info,
      );
      if (saved_appointment > 0) {
        return saved_appointment;
      } else {
        throw new InternalServerErrorException(
          "Appointment data could not be saved",
        );
      }
    } catch (e) {
      throw new InternalServerErrorException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: e.message,
      });
    }
  }

  // #5
  @Get("/appointment")
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK) 
  async Upcoming_Appointment(@Request() req): Promise<any> {
    try {
      const data = this.patientService.Get_Single_Appointment(req.user.email);
      if (data != null) {
        return data;
      } else {
        throw new NotFoundException("No Data Found!");
      }
    } catch (e) {
      throw new InternalServerErrorException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: e.message,
      });
    }
  }

  @Get("/appointment/list")
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  async Get_All_Appointments(@Request() req): Promise<any> {
    try {
      const data = this.patientService.Get_All_Appointments_List(req.user.email);
      if (data != null) {
        return data;
      } else {
        throw new NotFoundException("No Data Found!");
      }
    } catch (e) {
      throw new InternalServerErrorException({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: e.message,
      });
    }
  }

  @Put("/appointment/update")
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK) // Set the status code to 200 (OK)
  async Update_Appointment(@Body() updated_data: AppointmentDTO): Promise<any> {
    try {
      return await this.patientService.Update_Appointment_Details(updated_data);
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  @Delete("/appointment/delete/:id")
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK) // Set the status code to 200 (OK)
  async Delete_Appointment(
    @Param("id", ParseIntPipe) id: number,
  ): Promise<any> {
    console.log('Got Appointment Delete ID = '+id);
    try {
      if (id == null) {
        throw new BadRequestException({
          status: HttpStatus.BAD_REQUEST,
          message: "Appointment ID not found",
        });
      }

      const decision = await this.patientService.Delete_Appointment(id);
      if (decision.affected != 0) {
        return decision;
      } else {
        throw new NotFoundException({
          status: HttpStatus.NOT_FOUND,
          message: "No Appointment Found to Delete",
        });
      }
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  @Get("medical_record/list")
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK) // Set the status code to 200 (OK)
  async Get_All_Medical_Record_List(@Request() req): Promise<any> {
    try {
      const med_rec_list = this.patientService.Get_All_Medical_Lab_Record_List(
        req.user.email,
      );

      if (med_rec_list != null) {
        return med_rec_list;
      } else {
        throw new NotFoundException("Data not found");
      }
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  @Get("medical_record/:id")
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK) // Set the status code to 200 (OK)
  async Get_Selected_Lab_Report(
    @Param("id", ParseIntPipe) id: number,
  ): Promise<any> {
    try {
      if (id == null) {
        throw new BadRequestException({
          status: HttpStatus.BAD_REQUEST,
          message: "Medical Report ID not found",
        });
      }

      const data = await this.patientService.Get_Single_Medical_Record(id);
      if (data != null) {
        return data;
      } else {
        throw new NotFoundException({
          status: HttpStatus.NOT_FOUND,
          message: "No Appointment Found to Delete",
        });
      }
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  // # : Upload & Update patient Image
  @Put("/profile/upload")
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK) 
  @UseInterceptors(
    FileInterceptor("myfile", {
      fileFilter: (req, file, cb) => {
        if (file.originalname.match(/^.*\.(jpg|webp|png|jpeg)$/))
          cb(null, true);
        else {
          cb(new MulterError("LIMIT_UNEXPECTED_FILE", "image"), false);
        }
      },
      limits: { fileSize: 5000000 }, // 5 MB
      storage: diskStorage({
        destination: "./assets/profile_images",
        filename: function (req, file, cb) {
          cb(null, Date.now() + file.originalname);
        },
      }),
    }),
  )
  async UploadProfileImage(
    @Request() req,
    @UploadedFile() myfileobj: Express.Multer.File,
  ): Promise<any> {
    console.log(myfileobj); // We can find the file name here
    if (myfileobj == null) {
      throw new BadRequestException({
        status: HttpStatus.BAD_REQUEST,
        message: "Please Upload Image",
      });
    }
    const patient = await this.patientService.Update_Profile_Picture(
      req.user.email,
      myfileobj.filename,
    );
    if (patient != null) {
      return patient;
    } else {
      throw new NotFoundException({
        status: HttpStatus.NOT_FOUND,
        message: "No patient Found to Upload patient Image",
      });
    }
  }

  @Get("/profile/view_profile_image")
  @UseGuards(AuthGuard)
  @HttpCode(HttpStatus.OK) // Set the status code to 200 (OK)
  async getPatientImages(@Request() req, @Res() res): Promise<any> {
    try {
      return this.patientService.Get_Profile_Picture(req.user.email, res);
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  @Post("/payment/create")
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK) 
  async Create_Billing(@Request() req, @Body() bill: BillingDTO): Promise<any> {
    console.log('Got Email in to create Payment = '+req.user.email);
    try {
      const decision = await this.patientService.Create_Billing_Payment(
        req.user.email,
        bill,
      );

      if (decision > 0) {
        return decision;
      } else {
        throw new InternalServerErrorException(
          "Payment Could not be completed",
        );
      }
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  @Get("payment/list")
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK) // Set the status code to 200 (OK)
  async Get_All_Billing(@Request() req): Promise<any> {
    try {
      const payment_list = this.patientService.Get_All_Billing_Payment(
        req.user.email,
      );

      if (payment_list != null) {
        return payment_list;
      } else {
        throw new NotFoundException("Data not found");
      }
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  @Post("/feedback/create")
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK) 
  async Create_Feedback(@Request() req, @Body() feedback: FeedbackDTO): Promise<any> {
    try {
      const decision = await this.patientService.Create_Feedback(
        req.user.email,
        feedback,
      );

      if (decision > 0) {
        return decision;
      } else {
        throw new InternalServerErrorException("Feedback Could not be sent");
      }
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  @Post("/forget_password")
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK) 
  async Forget_Password(
    @Body() forgetPassword_DTO: ForgetPasswordDTO,
  ): Promise<any> {
    try {
      return await this.patientService.ForgetPassword(forgetPassword_DTO.email);
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }

  @Post("/otp")
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK)
  async OTP_Verification(
    @Request() req,
    @Body() OTP_Object: OTP_ReceiverDTO,
  ): Promise<any> {
    try {
      console.log("User provided otp = " + OTP_Object.otp);
      const deicision = await this.patientService.otp_verification(
        req,
        OTP_Object.otp,
      );
      if (deicision) {
        return {
          success: true,
          message: "OTP verification successful",
        };
      } else {
        return new BadRequestException("OTP did not matched!");
      }
    } catch (e) {
        throw e;
    }
  }
  
  
  
    @Get('/navbar_info')
  @UseGuards(AuthGuard)
  @UsePipes(new ValidationPipe())
  @HttpCode(HttpStatus.OK) // Set the status code to 200 (OK)
  async Navbar(@Request() req): Promise<any> {
    console.log('Got email = ' + req.user.email);
    try {
      const navbar_data = await this.patientService.navbar(req.user.email);
      // console.log('Request Headers:', req.headers);
      console.log('patient_name = ' + navbar_data.name);

      if (navbar_data.name !== null) {
        return navbar_data;
      } else {
        throw new NotFoundException('Data not found');
      }
    } catch (e) {
      throw new InternalServerErrorException(e.message);
    }
  }
  
  
}
